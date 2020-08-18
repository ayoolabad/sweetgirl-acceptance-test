package com.sugartech.sweetgirl.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccountPagePO {
    @FindBy(id = "firstname")
    public static WebElement firstnameField;
    @FindBy(id = "lastname")
    public static WebElement lastnameField;
    @FindBy(id = "email_address")
    public static WebElement emailField;
    @FindBy(name = "password")
    public static WebElement passwordField;
    @FindBy(name = "password_confirmation")
    public static WebElement confirmpasswordField;
    @FindBy(css = "#form-validate > div > div.primary > button > span")
    public static WebElement createAccountButton;
    public CreateAccountPagePO(WebDriver driver) {
        PageFactory.initElements(driver, this); }
        public void enterFirstname (String Firstname) {firstnameField.sendKeys(Firstname);}
        public void enterLastname (String Lastname) {lastnameField.sendKeys(Lastname);}
        public void enterEmail (String Email) {emailField.sendKeys(Email);}
        public void enterPassword (String Password) {passwordField.sendKeys(Password);}
        public void enterConfirmPassword (String ConfirmPassword) {confirmpasswordField.sendKeys(ConfirmPassword);}
        public void clickCreateAccountButton () {createAccountButton.click();}
}
