import Filter from './filterModel.js';
import * as view from './filterView.js';

export default function (state) {
   // создаем объект фильтр
   if (!state.filter) state.filter = new Filter();
   // получаем параметры для фильтра
   state.filter.getParams();
   // отрисовка фильтра
   view.render(state.filter.params);
}
