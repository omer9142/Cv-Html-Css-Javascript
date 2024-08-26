var output = document.getElementById('output');
var skillInput = document.getElementById('skill-input');

document.getElementById('add-skill-btn').addEventListener('click', function () {
    console.log("Add Skill Button clicked");

    if (skillInput.value.trim() !== "") {
        var items = output.children;
        var skillExists = false;
        
        
        for (var i = 0; i < items.length; i++) {
            if (skillInput.value.trim() === items[i].textContent.replace('-', '').trim()) {
                skillExists = true;
                break;
            }
        }


        if (!skillExists) {
            addList();
        } else {
            console.log("Skill already exists in the list.");
        }
    }
});

function addList() {
    var listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(skillInput.value.trim() + ' '));

    var remove = document.createElement('button');
    remove.textContent = '-';

    remove.addEventListener('click', function () {
        console.log("Remove Skill Button clicked");
        output.removeChild(listItem);
    });

    listItem.appendChild(remove);
    output.appendChild(listItem);

    skillInput.value = "";
}
