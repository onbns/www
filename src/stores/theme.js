import { observable, computed } from 'mobx';

export default class {
 blockchainList = {
  Ethereum: {
   name: 'Ethereum',
   color: '#152E42'
  },
  EOS: {
   name: 'EOS',
   color: '#443f54'
  },
  Vechain: {
   name: 'Vechain',
   color: '#4bc0fa'
  },
  NEO: {
   name: 'NEO',
   color: '#A3D243'
  },
  Tron: {
   name: 'Tron',
   color: '#d21828'
  },
  Tezos: {
   name: 'Tezos',
   color: '#2c7df7'
  },
  QTUM: {
   name: 'QTUM',
   color: '#1297d7'
  },
  Your: {
   name: 'Your',
   color: '#13EDA6'
  }
 }

 @observable name = 'Any';
 @computed get blockchain() {
  return this.blockchainList[this.name] || { 
    name: 'Any',
    color: '#000'
   };
 }
};
