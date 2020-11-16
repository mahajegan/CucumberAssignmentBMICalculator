package TestNGSample;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.*;

public class AllAnnotations {
	
	@Test
	public void testMethod() {
		System.out.println("Its a Test Method");
	}

	@Test
	public void testMethod1() {
		System.out.println("Its a Test Method 1");
	}
	
	@BeforeMethod
	public void beforeMethod() {
		System.out.println("This is Before Method");
	}
	
	
	@AfterMethod
	public void afterMethod() {
		System.out.println("This is the After Method");
	}
	@BeforeClass
	public void beforeclass() {
		System.out.println("Before Class");
	}
	
	@AfterClass
	public void afterclass() {
		System.out.println("After Class");
	}
	
	@BeforeSuite
	public void beforeSuite() {
		System.out.println("Before Suite");
	}
	
	@AfterSuite
	public void afterSuite() {
		System.out.println("After Suite");
	}
	
}
