import { NodeFrontendPage } from './app.po';

describe('node-frontend App', () => {
  let page: NodeFrontendPage;

  beforeEach(() => {
    page = new NodeFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
