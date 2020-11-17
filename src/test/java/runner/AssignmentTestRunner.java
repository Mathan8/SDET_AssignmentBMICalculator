package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/features/assignment.feature",
		glue = {"stepDefinition"},
		tags= {"@RegressionTest"},
		plugin = {"pretty", "html:target/cucumber-pretty"})
public class AssignmentTestRunner {
	
}