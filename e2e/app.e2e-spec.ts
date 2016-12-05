import { TutorialAngularStylingBootstrapPage } from './app.po';

describe('tutorial-angular-styling-bootstrap App', function() {
  let page: TutorialAngularStylingBootstrapPage;

  beforeEach(() => {
    page = new TutorialAngularStylingBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
