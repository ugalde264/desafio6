Feature('Login');

Scenario('Login to MetLife Workspace', ({ I }) => {

  I.amOnPage('/Citrix/ResourcesWeb/');
  I.saveScreenshot('step1.png');
  
 
  I.waitForElement({ xpath: '//*[@id="domain"]' }, 10);
  I.saveScreenshot('step2.png');
  I.click({ xpath: '//*[@id="domain"]' });
  

  I.selectOption({ xpath: '//*[@id="domain"]' }, 'RSA Token');
  I.saveScreenshot('step3.png');
  

  I.waitForElement({ xpath: '//*[@id="loginBtn"]' }, 10);
  I.saveScreenshot('step4.png');
  I.click({ xpath: '//*[@id="loginBtn"]' });
  
 
  I.waitForElement({ xpath: '//*[@id="login"]' }, 10);
  I.saveScreenshot('step5.png');
  I.fillField({ xpath: '//*[@id="login"]' }, 'castanedae');
  
  I.waitForElement({ xpath: '//*[@id="passwd"]' }, 10);
  I.saveScreenshot('step6.png');
  I.fillField({ xpath: '//*[@id="passwd"]' }, '123456');
  
  
  I.waitForElement({ xpath: '//*[@id="loginBtn"]' }, 10);
  I.saveScreenshot('step7.png');
  I.click({ xpath: '//*[@id="loginBtn"]' });
});
