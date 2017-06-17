import { PhilproftWwwPage } from './app.po';

describe('philproft-www App', () => {
  let page: PhilproftWwwPage;

  beforeEach(() => {
    page = new PhilproftWwwPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
