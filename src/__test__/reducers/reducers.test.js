import reducer from '../../reducers/';
import ProductMock from '../../__mocks__/ProductMock';

describe('reducers', () => {
  test('Return initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('add_to_cart', () => {
    const initialState = {
      cart: [],
    };

    const payload = ProductMock;
    const actions = {
      type: 'ADD_TO_CART',
      payload,
    };

    const expected = {
      cart: [ProductMock],
    };

    expect(reducer(initialState, actions)).toEqual(expected);
  });
});
