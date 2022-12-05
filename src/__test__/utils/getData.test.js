import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Call API and return data', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getData('https://google.com').then((response) => {
      expect(response.data).toBe('12345');
    });

    expect(fetch.mock.calls[0][0]).toBe('https://google.com');
  });
});
