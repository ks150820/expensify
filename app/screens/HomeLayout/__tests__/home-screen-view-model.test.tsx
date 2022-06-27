import {renderHook} from '../../../../testing/test-utils';
import useHomeScreenViewController from '../home-screen-view-model';
// import {HomeProps} from '../../../../../Navigation/@types/navigation-types';

// const {navigation} = HomeProps;

describe('home-screen-view-model', () => {
  test('test home view model method when navigation argument is passed', () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const {result} = renderHook(
      useHomeScreenViewController,
      {navigation},
      {
        entities: {
          incomeReducer: {
            income: [
              {
                type: 'salary',
                amount: 300,
              },
            ],
            expenses: [
              {
                type: 'Food',
                amount: 100,
              },
            ],
          },
        },
      },
    );

    result.current.onPress();

    expect(navigation.navigate).toHaveBeenCalledTimes(1);
  });

  test('test home view model method when navigation argument is not passed', () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const {result} = renderHook(
      useHomeScreenViewController,
      {},
      {
        entities: {
          incomeReducer: {
            income: [
              {
                type: 'salary',
                amount: 300,
              },
            ],
            expenses: [
              {
                type: 'Food',
                amount: 100,
              },
            ],
          },
        },
      },
    );

    result.current.onPress();

    expect(navigation.navigate).not.toHaveBeenCalledTimes(1);

    expect(result.current.getTotalIncome).toBe(300);
    expect(result.current.getTotalExpense).toBe(100);
    expect(result.current.saving).toBe(200);
  });
});
