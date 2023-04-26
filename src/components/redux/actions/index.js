import {createAction} from '@reduxjs/toolkit'

export const setPersons = createAction('PERSONS')
export const setTablePerson = createAction('ADD_PERSONS')
export const setDeletePerson = createAction('DELETE_PERSONS')

