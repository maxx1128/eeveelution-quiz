import { htmlSafe } from '@ember/string';
import { helper } from '@ember/component/helper';

export function titleize(params/*, hash*/) {
  let text = params[0],
      withoutDashes = text.replace('-', ' ');

  return htmlSafe(`<span class="eq-titleize">${withoutDashes}</span>`);
}

export default helper(titleize);
