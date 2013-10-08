// ORIGINAL  

 function TodoItem(txt){    //12:00
  var todo_item = this; 
  this.text = txt;        //the property name of the object im in .   this is like self in ruby
  this.id = this.text.replace(/\s*/g,'');  //1:35:20//1:39:00// 1:46:00
  this.completedTask = function(){
  document.getElementById("complete").addEventListener('click', function(){
  });
  }
  this.completeButton = function(){
    var element = document.createElement("button");
    element.onclick = function(){
          li = document.getElementById(todo_item.id);//2:16:00  //li is an html element
          var todo_list = document.getElementById("todo-items"); //2:27:30
          todo_list.removeChild(li); //2:23:00 //2:26:20
    }
    return element;
  }
};

var todo_app = {
  
  createTask: function() {                    //23:40
    var text_input = document.getElementById("new-task-field");
    var text = text_input.value;
    var todo_item = new TodoItem(text);
    todo_app.appendTask(todo_item);
  },  

  appendTask: function(todo_item) {
    if (todo_item.text == '')
      return false;
    var todo_list = document.getElementById("todo-items");
    // var element = document.createElement("li");
    // var button = todo_item.completeButton();  //2:44:00
  // element.innerText = todo_item.text;

    element = document.createElement("li");
    element.innerHTML = todo_item.text;
    element.id = todo_item.id; //1:42:35
    todo_list.appendChild(element);
    button = todo_item.completeButton();  //2:44:00
    console.log(button);
    element.appendChild(button);
    //commented out line // element.innerHTML += ("<li>" + todo_item + "</li>");tem would not be a string
  }
}

window.onload = function(){
  document.getElementById("add-item").addEventListener('click', function(){
    todo_app.createTask();
  });
};




