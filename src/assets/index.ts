import  dashboard from './dashboard.png';
import blog from './blog.png';
import analytic from './analytic.png'
import businessReport from './business-report.png'
import gear from './gear.png'
import groceryShelf from './grocery-shelf.png'
import transactions from './transactions.png'
import users from './group.png'



export const imageIcon ={
    dashboard,
    blog,analytic,businessReport,gear,groceryShelf,transactions,users
}

export type ImageIconType = keyof typeof imageIcon;
