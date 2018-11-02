/*
 * @Description: In User Settings Edit
 * @Author: zhangyuhong
 * @Date: 2018-11-01 17:19:24
 * @LastEditTime: 2018-11-01 17:19:29
 * @LastEditors: zhangyuhong
 */


 import {observable, autorun, computed} from "mobx"
 //经过@observable的修饰之后，Todo的title和finished两个属性变成可观测状
//  class Todo {
//      id = Math.random();
//      // @observable 装饰器 ，可以不用
//      @observable title = "";
//      @observable finished =false;

//  }

//  function Todo() {
//     this.id = Math.random();
//     extendObservable(this, {
//         title: "",
//         finished: false
//     });
// }
// observable可以用来观察一个数据（这个数据可以是数字，数组，对象等类型），而当观察的数据发生变化的时候
const value = observable.box(0);
const number = observable.box(100);
const plus = computed(()=>number.get()>1)
// 如果 变化的值处在autorun中，那个autorun就会自动执行
autorun(() => {
//   console.log(value.get());
  console.log(plus.get());
});

// value.set(1);
// value.set(2);
number.set(-9);
number.set(-1)
number.set(9)

//假若现在有一个数字，但是不感兴趣她的值，只是关心她的值是不是整数，这个时候我们就要可用到computed这个属性了

// 依次输出了true，false，true。
// 第一个true是number初始化值的时候，100 > 0为true没有问题。
// 第二个false将number改变为-19，输出false，也没有问题。
// 但是当-19改变为-1的时候，虽然number变了，但是number的改变实际上并没有改变plus的值，所以没有其它地方收到通知，因此也就并没有输出任何值。
// 直到number重新变为9时才输出true。
