import { CodeCursoAngular4Page } from './app.po';

describe('code-curso-angular4 App', function() {
  let page: CodeCursoAngular4Page;

  beforeEach(() => {
    page = new CodeCursoAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
