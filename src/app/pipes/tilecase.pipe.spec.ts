import { TilecasePipe } from './tilecase.pipe';

describe('TilecasePipe', () => {
  it('create an instance', () => {
    const pipe = new TilecasePipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms "abc" to "Abc"', () => {
    const pipe = new TilecasePipe();
    expect(pipe.transform('abc')).toBe('Abc');
  });
});
