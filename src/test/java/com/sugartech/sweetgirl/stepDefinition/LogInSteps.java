package com.sugartech.sweetgirl.stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LogInSteps {
    WebDriver driver;
    @Given("^customer is on Sign In Page$")
    public void customerIsOnSignInPage() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.get("http://demo-magento2.vuestorefront.io/customer/account/login/");
        driver.findElement(By.linkText("Sign In")).click();
    }

    @When("^customer inputs \"([^\"]*)\"$")
    public void customerInputs(String Email) throws Throwable {
        driver.findElement(By.name("login[username]")).sendKeys(Email);
    }

    @And("^user enters that \"([^\"]*)\"$")
    public void userEntersThat(String Password) throws Throwable {
        driver.findElement(By.id("pass")).sendKeys(Password);
    }

    @And("^customer click the Sign In link$")
    public void customerClickTheSignInLink() {
        driver.findElement(By.cssSelector("#send2 > span")).click();
    }

    @Then("^customer MyDashboard page is displayed$")
    public void customerMyDashboardPageIsDisplayed() {
        driver.quit();
    }
}
