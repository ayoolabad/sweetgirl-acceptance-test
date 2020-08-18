package com.sugartech.sweetgirl.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LogInPagePO {
    @FindBy(id = "email")
    public static WebElement emailField;
    @FindBy(name = "login[password]")
    public static WebElement passwordField;
    @FindBy(css = "#send2")
    public static WebElement signInButton;
    public LogInPagePO(WebDriver driver) {PageFactory.initElements(driver, this);}
    public void enterEmail(String Email) {emailField.sendKeys(Email);}
    public void enterPassword (String Password) {passwordField.sendKeys(Password);}
    public void clickSignInButton() {signInButton.click();}
}
