function Test1()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://hansencis-uat.se.hsntech.com/EnergyPortal/jsf/care/searchCustomerProspect.jsf");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageSearchcustomerprospect.Wait();
  //Clicks the 'textboxJUsername' control.
  Aliases.browser.pageSearchcustomerprospect.formUsername.textboxJUsername.Click();
  //Sets the text 'SSHIVANNA' in the 'textboxJUsername' text editor.
  Aliases.browser.pageSearchcustomerprospect.formUsername.textboxJUsername.SetText("SSHIVANNA");
  //Clicks the 'passwordboxJPassword' control.
  Aliases.browser.pageSearchcustomerprospect.formUsername.passwordboxJPassword.Click();
  //Sets the text Project.Variables.Password2 in the 'passwordboxJPassword' text editor.
  Aliases.browser.pageSearchcustomerprospect.formUsername.passwordboxJPassword.SetText(Project.Variables.Password2);
  //Clicks the 'buttonLogin' button.
  Aliases.browser.pageSearchcustomerprospect.formUsername.buttonLogin.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageSearchcustomerprospect.Wait();
  //Clicks the 'textboxRootbuid' control.
  Aliases.browser.pageSearchcustomerprospect.textboxRootbuid.Click();
  //Sets the text '25451904' in the 'textboxRootbuid' text editor.
  Aliases.browser.pageSearchcustomerprospect.textboxRootbuid.SetText("25451904");
  //Clicks the 'buttonSearch' button.
  Aliases.browser.pageSearchcustomerprospect.buttonSearch.ClickButton();
  //Clicks the 'buttonGoToCustomer' button.
  Aliases.browser.pageSearchcustomerprospect.buttonGoToCustomer.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageDashboard.Wait();
  //Clicks the 'textnode' control.
  Aliases.browser.pageDashboard.textnode.Click();
  //Clicks the 'textnodeContract' control.
  Aliases.browser.pageDashboard.textnodeContract.Click();
  //Clicks the 'textboxMobile2' control.
  Aliases.browser.pageDashboard.textboxMobile2.Click();
  //Sets the text '0415678784' in the 'textboxMobile2' text editor.
  Aliases.browser.pageDashboard.textboxMobile2.SetText("0415678784");
  //Clicks the 'textboxEmail2' control.
  Aliases.browser.pageDashboard.textboxEmail2.Click();
  //Sets the text 'dummy@gmail.com' in the 'textboxEmail2' text editor.
  Aliases.browser.pageDashboard.textboxEmail2.SetText("dummy@gmail.com");
  //Clicks the 'buttonSave' button.
  Aliases.browser.pageDashboard.buttonSave.ClickButton();
  //Clicks the 'textnode2' control.
  Aliases.browser.pageDashboard.textnodeSmTopmenu.textnodeSshivanna.textnode2.Click();
  //Clicks the 'textnode2' control.
  Aliases.browser.pageDashboard.textnodeSmTopmenu.textnodeSshivanna.textnode2.Click();
  //Clicks the 'textnodeLogOut' control.
  Aliases.browser.pageDashboard.textnodeSmTopmenu.textnodeSshivanna.linkLogOut.textnodeLogOut.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageDashboard.textnodeYouHaveBeenSuccessfully object equals 'You have been successfully logged out.'.
  aqObject.CheckProperty(Aliases.browser.pageDashboard.textnodeYouHaveBeenSuccessfully, "contentText", cmpEqual, "You have been successfully logged out.");
}