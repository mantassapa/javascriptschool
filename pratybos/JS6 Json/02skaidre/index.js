"use strict"
import duomenys from './data.js'


const AllLS = localStorage.getItem('localStorage')

const localStorage = AllLS === null ? [] : JSON.parse(AllLS)