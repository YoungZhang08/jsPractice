/**
 * 给定一个学生列表，学生信息由班级、分数、姓名等组成。请按下列规则对学生列表进行排序：
 * 按班级从小到大排;
 * 班级相同时，按成绩从大到小排序;
 * 班级和成绩相同时，按原学生列表中的先后顺序排序
 */
/**
 * 样例输入
 * [{"name":"张三","class":2,"score":64},
 *  {"name":"李四","class":1,"score":80},
 *  {"name":"王五","class":1,"score":80},
 *  {"name":"赵六","class":4,"score":94}]
 * 样例输出
 * [{"name":"李四","class":1,"score":80},
 *  {"name":"王五","class":1,"score":80},
 *  {"name":"张三","class":2,"score":64},
 *  {"name":"赵六","class":4,"score":94}]
 */
function sortStudents(students) {
    students.sort(function(a, b) {
        if(a.class == b.class) {
            return a.score - b.score;
        }
        return a.class - b.class;
    });
    console.log(students);
    return JSON.stringify(students);
}

sortStudents([{"name":"张三","class":2,"score":64},{"name":"李四","class":1,"score":80},{"name":"王五","class":1,"score":80},{"name":"赵六","class":4,"score":94}])
