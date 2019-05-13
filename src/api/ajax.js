import axios from 'axios'
import qs from 'qs'

export default async function ajax (url,data,type='get') {
  try {
    let res
    if(type === 'get') {
      res = await axios.get('/api'+url,{
        params : data
      })
    } else{
      res = await axios.post('/api'+url,qs.stringify(data))

    }
    res = res.data //axios请求成功后得到的是一个promise，await返回的值就是后面promise执行的结果，因此返回了axios请求后的对象给res
    return new Promise((resolve)=>{
      resolve(res) //函数最后返回一个promise实例，这里直接resolve把请求到的结果返回出去，调用接口函数那个await返回的就是res，
    })
  } catch (error) {
    //一般自己网络不行就会axios发送请求失败，然后捕捉错误来到这里
    alert('网络错误')
    console.log(error);
  }
}