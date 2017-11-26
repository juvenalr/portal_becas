import { SistemaBecasFrontPage } from './app.po';

describe('sistema-becas-front App', () => {
  let page: SistemaBecasFrontPage;

  beforeEach(() => {
    page = new SistemaBecasFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
