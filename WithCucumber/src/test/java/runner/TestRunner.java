package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/features/assignment.feature",
		glue = {"stepDefinition"},
		//tags = {"@RegressionTest"},
		//tags = {"@SmokeTest","@RegressionTest"} //And Condition to execute both tags
		//tags = {"@SmokeTest,@RegressionTest"} //OR Condition
		//tags = {"@FunctionalTest"} // Executing feature tag
		//tags = {"@FunctionalTest","~@RegressionTest"}, //Skipping scenario symbol ~
		plugin = { "pretty", "html:target/cucumber-pretty"}
		//plugin = { "pretty", "rerun:target/rerun.txt"}
		)

public class TestRunner {

}
