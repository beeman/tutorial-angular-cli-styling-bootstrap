import { TutorialAngularCliStylingBootstrapPage } from './app.po';

describe('tutorial-angular-cli-styling-bootstrap App', () => {
  let page: TutorialAngularCliStylingBootstrapPage;

  beforeEach(() => {
    page = new TutorialAngularCliStylingBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
