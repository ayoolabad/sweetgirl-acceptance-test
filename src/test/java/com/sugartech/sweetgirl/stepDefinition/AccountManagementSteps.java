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

public class AccountManagementSteps {
    WebDriver driver;
    @Given("^user is on create an account page$")
    public void userIsOnCreateAnAccountPage() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.get("http://demo-magento2.vuestorefront.io/");
        driver.manage().window().maximize();
        driver.findElement(By.linkText("Create an Account")).click();
    }

    @When("^user enters so \"([^\"]*)\"$")
    public void userEntersSo(String FirstName) throws Throwable {
        driver.findElement(By.id("firstname")).sendKeys(FirstName);
    }

    @And("^user enters a \"([^\"]*)\"$")
    public void userEntersA(String LastName) throws Throwable {
        driver.findElement(By.id("lastname")).sendKeys(LastName);
    }

    @And("^user enters their \"([^\"]*)\" Address$")
    public void userEntersTheirAddress(String Email) throws Throwable {
        driver.findElement(By.name("email")).sendKeys(Email);
    }

    @And("^user enters that \"([^\"]*)\" on create account page$")
    public void userEntersThatOnCreateAccountPage(String Password) throws Throwable {
        driver.findElement(By.name("password")).sendKeys(Password);
    }

    @And("^user enters that to confirm the \"([^\"]*)\"$")
    public void userEntersThatToConfirmThe(String ConfirmPassword) throws Throwable {
        driver.findElement(By.name("password_confirmation")).sendKeys(ConfirmPassword);
    }

    @And("^user clicks on CreateAnAccount$")
    public void userClicksOnCreateAnAccount() {
        driver.findElement(By.cssSelector("#form-validate > div > div.primary > button")).click();
    }

    @Then("^user MyAccount page is displayed\\.$")
    public void userMyAccountPageIsDisplayed() {
        driver.close();
    }
}
