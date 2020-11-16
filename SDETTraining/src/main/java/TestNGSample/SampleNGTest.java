package TestNGSample;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class SampleNGTest {
	
	@Test
	public void enterGoogle() {
		System.setProperty("webdriver.chrome.driver", "C:/Users/MahalakshmiKathamuth/eclipse-selenium-sdet/Jars/chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.google.com");
	}

}
