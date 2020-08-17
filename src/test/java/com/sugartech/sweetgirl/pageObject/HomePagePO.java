package com.sugartech.sweetgirl.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePagePO {
    @FindBy(linkText = "Create an Account")
    public static WebElement CreateAccountLink;
    @FindBy(linkText = "Sign In")
    public static WebElement SignInLink;

    public HomePagePO(WebDriver driver)  {
        PageFactory.initElements(driver, this);
    }
    public void clickCreateAccountLink(){
        CreateAccountLink.click();
    }
    public void clickSignInLink(){
        SignInLink.click();
    }
}
