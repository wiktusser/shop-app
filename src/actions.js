export const REQUEST_ITEMS = 'REQUEST_ITEMS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const RECEIVE_ITEMS_FAILED = 'RECEIVE_ITEMS_FAILED'
export const SELECT_ITEM = 'SELECT_ITEM'

function requestItems(categories) {
  return {
    type: REQUEST_ITEMS,
    categories
  }
}

function receiveItems(categories, json) {
    return {
      type: REQUEST_ITEMS,
      categories,
      items: json.data.children.map(item => item.data),
      receivedAt: Date.now()
    }
  }

  function receiveItemsFailed(categories) {
    return {
      type: RECEIVE_ITEMS_FAILED,
      categories
    }
  }

  

export function selectItem(item) {
  return {
    type: SELECT_ITEM,
    item
  }
}