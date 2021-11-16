import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test("adding a movie to the page", async () => {
    let movieTitle = "Memento"

    await driver.findElement(By.xpath("//input")).sendKeys(`${movieTitle}\n`)
    await driver.findElement(By.xpath("//input")).sendKeys("Interstellar\n")
    // await driver.findElement(By.name("movie-input")).sendKeys("Inception\n")

    await driver.sleep(2000)

    await driver.findElement(By.id(`${movieTitle}`)).click()
    await driver.findElement(By.id("Interstellar")).click()

    await driver.sleep(2000)

})