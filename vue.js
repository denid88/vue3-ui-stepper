const App = {
  data() {
    return {
      title: 'План по изучению Vue.js',
      activeIndex: 0,
      steps: [
        {title: 'Основы', text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'},
        {title: 'Компоненты', text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'},
        {title: 'Роутер', text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'},
        {title: 'Vuex', text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'},
        {title: 'Composition', text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'},
      ],
      prevBtnText: 'Назад',
      lastStepDescription: 'Вы полностью просмотрели программу курса, и теперь можете ознакомиться с ней с начала',
      isFinish: false
    }
  },
  methods: {
    prev() {
      this.activeIndex = this.activeIndex - 1
    },
    reset() {
      this.activeIndex = 0
      this.isFinish = false
    },
    nextOrFinish() {
      if (this.isFinish) {return this.reset()}
      if (this.isLastStep) {this.isFinish = true}
      this.activeIndex = this.activeIndex + 1
    },
    setActive(idx) {
      if (this.isFinish) {return}
      this.activeIndex = idx
    },
    isDone(i) {
      return i < this.activeIndex
    },
    isActive(i) {
      return i === this.activeIndex
    },
  },
  computed: {
    prevBtnDisabled() {
      return this.activeIndex === 0
    },
    description() {
      return this.isFinish ?
        this.lastStepDescription :
        this.steps[this.activeIndex].text
    },
    nextOrFinishBtnText() {
      if (this.isFinish) return 'Начать заново'
      if (this.isLastStep) return 'Закончить'
      return 'Вперед'
    },
    isLastStep() {
      return this.activeIndex === this.steps.length - 1
    },
  }
}

Vue.createApp(App).mount('#app')