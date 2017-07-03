export default {
    host: 'http://talents.jd.com',
    basePath: '',
    api: [
        {
            name: '测试API-1',
            desc: '测试API-1的描述',
            method: 'get',
            url: '/manage/employeebasic/get_employeecertificate',
            res: {
                resList: [
                    {
                        type: 'mock-yaml',
                        name: '成功',
                        content: `success: true
data: 
  - name: 机动车驾驶证
    date_obtained: '2016-09-12'

  - name: 注册会计师证
    date_obtained: '2016-11-22'`
                    },
                    {
                        type: 'mock-yaml',
                        name: '失败',
                        content: `success: true
data: !!seq`
                    }
                ]
            }
        },
        {
            name: '测试API-2',
            desc: '测试API-2的描述',
            method: 'get',
            url: '/manage/employeebasic/get_employeehobbies',
            res: {
                resList: []
            }
        }
    ]
}
