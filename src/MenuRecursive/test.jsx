
function menuInfo(menuName, menuUrl) {
  this.menuName = menuName;
  this.menuUrl = menuUrl;
  this.subMenu = [];
};


const allMenu = [

  {
    menuName: "File",
    menuUrl: '/file',
    subMenu: [
      new menuInfo("New Text", "/new-text"),
      new menuInfo("New File", "/new-file"),
      new menuInfo("New Window", "/new-window")
    ]
  },
  {
    menuName: "Edit",
    menuUrl: '/edit',
    subMenu: [
      new menuInfo("Undo", "undo"),
      new menuInfo("Redo", "/redo"),
      new menuInfo("Cut", "/cut"),
      new menuInfo("Copy", "/copy"),
      new menuInfo("Paste", "/paste")
    ]
  },
  {
    menuName: "Run",
    menuUrl: 'run',
    subMenu: [
      new menuInfo("Start Debugging", "start-debugging"),
      new menuInfo("Add Configuration", "add-configuration")
    ]
  }

]


const CreateMenu = () => {

  console.log("Inside CreateMenu");

   function menuCreateFromList(menu){
    if (menu === undefined)
      return <></>; //return a empty element in case there is no menu to implement
     
    let childMenuItem = menu.map(item=>{
        
      if(item.subMenu.length !==0 ) //There is going to sub-menu inside this menu
      {
        return (
            <ul>
              <a href={item.menuUrl}>{item.menuName}</a>     
              {menuCreateFromList(item.subMenu)}
            </ul>
          );
    }

      //leaf item
      return (
          <li>
            <a href={item.menuUrl}>{item.menuName}</a>
          </li>
        );
    })

     return childMenuItem;  
   }

  let toRenderMenu = menuCreateFromList(allMenu);
  console.log(toRenderMenu);

  return (
    <div>
      <h2> Menu Testing </h2>
      {toRenderMenu}
    </div>
  );
};

export default CreateMenu;
