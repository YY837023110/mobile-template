import { Get, Post } from './../http'

export let getIndex = (par,cb) => {//获取首页数据
    Get('/exam/js/computer.json',par,(res) => {
        cb(res);
    })
}

export let Login = (par,cb) => {
    Post('/exam/js/xxx',par,(res) => {
        cb(res);
    })
}