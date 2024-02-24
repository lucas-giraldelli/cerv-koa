import omit from 'lodash/omit';

export function omitId<T extends {}>(data: T) {
  return omit(data, 'id');
}
