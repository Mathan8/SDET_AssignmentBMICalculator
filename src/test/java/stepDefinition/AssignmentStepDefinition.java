package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class AssignmentStepDefinition {
	
	WebDriver driver;
	
	@Given("^Open the Online Calculator URL$")
	public void open_the_Online_Calculator_URL() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\MathanRajS\\eclipse-workspace\\CSEIBM23\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.calculator.net/");
	}

	@Given("^The page loads$")
	public void the_page_loads() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		String URL = driver.getCurrentUrl();
		System.out.println(URL);
		String expected = "https://www.calculator.net/";
		Assert.assertEquals(URL, expected);
	}

	@Then("^Validate the title of the page$")
	public void validate_the_title_of_the_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String title = driver.getTitle();
		String expected = "Calculator.net: Free Online Calculators - Math, Fitness, Finance, Science";
		Assert.assertEquals(title, expected);
	}

	@When("^I click on BMI calculator link$")
	public void i_click_on_BMI_calculator_link() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.linkText("BMI Calculator")).click();;
		
	}

	@When("^I reach the BMI calculator page$")
	public void i_reach_the_BMI_calculator_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String BMIURL = driver.getCurrentUrl();
		System.out.println(BMIURL);
		String expected = "https://www.calculator.net/bmi-calculator.html";
		Assert.assertEquals(BMIURL, expected);
	}
	
	@When("^Validate the title of the page again$")
	public void validate_the_title_of_the_page_again() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String BMItitle = driver.getTitle();
		String BMIexpected = "BMI Calculator";
		Assert.assertEquals(BMItitle, BMIexpected);
	}

	@Then("^Input (\\d+) (\\d+) (\\d+)$")
	public void input(String arg1, String arg2, String arg3) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("cage")).clear();
		driver.findElement(By.id("cage")).sendKeys(arg1);
		driver.findElement(By.id("cheightmeter")).clear();
		driver.findElement(By.id("cheightmeter")).sendKeys(arg2);
		driver.findElement(By.id("ckg")).clear();
		driver.findElement(By.id("ckg")).sendKeys(arg3);
		System.out.println("Entering the Age, Height and Weight");
	}

	@Then("^Click on Calculate BMI$")
	public void click_on_Calculate_BMI() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@type='image' and @value='Calculate']")).click();
	}

	@Then("^Capture the BMI Value and Print it$")
	public void capture_the_BMI_Value_and_Print_it() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement BMIResult = driver.findElement(By.xpath("//b[contains(text(), 'BMI = ')]"));
		String[] BMIIndex = BMIResult.getText().split("= ");
		System.out.println("Your BMI Index is "+BMIIndex[1]);
		
	}

	@Then("^Close the Browser$")
	public void close_the_Browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.quit();
	}
}
