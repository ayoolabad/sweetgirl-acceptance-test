package com.sugartech.sweetgirl.cucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Features",
        glue = {"com.sugartech.sweetgirl.stepDefinition"},
        format = {"pretty","html:target/site/cucumber-pretty"},
        tags = {"@LogIn"}
)
public class TestRunner {

}
