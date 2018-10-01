// class 定义了一个function的原型对象
// 不存在变量提升，并且内部全是严格模式
// Decorator 处于阶段二，暂不支持

class Penson {
  // 构造
  constructor(options) {
    // this指实例
    this.options = options || {}
    // 返回被实例化的类
    console.log('new.target')
    console.log(new.target)
  }

  // 可被继承方法
  showOptions() {
    console.log('showOptions', this.options)
  }

  get content() {
    console.log('get content')
  }

  set content(value) {
    console.log(`set content ${value}`)
  }

  // 静态(私有)、不可被实例继承，但可被子类继承方法
  static showName() {
    console.log('showName', this.name)
  }
}

// 类的可被继承属性
Penson.prototype.type = 1

// 类的私有(静态)、不可被实例继承，但可被子类继承属性
Penson.status = 2

// 类定义的方法
// console 1
console.log(Penson.prototype.showOptions)

// 类的实例

// console 2-3
const wang = new Penson({
  name: 'wang',
})

// console 4
Penson.showName()

// console 5
wang.showOptions()

// console 6
wang.content

// console 7
wang.content = 1

// console 8
console.log('8 type', wang.type)

// console 9
console.log('9 status', wang.status)

// 继承

class Man extends Penson {
  constructor(options) {
    // 先执行父类构造
    super(options)
    this.options.sex = '男'
  }

  shirt() {
    // setter super === this
    super.type = 3
    // getter super指向父类原型对象
    console.log('type', super.type)
  }

  static shoe() {
    // setter super === this
    super.status = 4
    // getter super指向父类
    console.log('status', super.status)
  }
}

// console 10-11
const zhang = new Man({
  name: 'zhang',
})

// console 12
Man.showName()

// console 13
zhang.showOptions()

// console 14
zhang.shirt()

// console 15
console.log('15 type', zhang.type)

// console 16
Man.shoe()

// console 15
console.log('17 status', Man.status)
