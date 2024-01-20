const filterList = require('./task');

describe('filterList',()=>{
    test('Throws an error if the list is not multiple of 10', () => {
      const inputList = [1,2,3,4,5];
      expect(()=>filterList(inputList)).toThrowError('List length must be a multiple of 10');
    });
    test('Throws error if the list is not filtered properly ', () => {
      const inputList=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
      const outputList=[ 2, 6, 8, 12, 14, 18, 20];
      expect(filterList(inputList)).toEqual(outputList);
    });
    
});