const form = document.querySelector('#new-task-form');
const input = document.querySelector('#new-task-input');
const list_el = document.querySelector('#tasks');

//berikut nya kita tambahakan event pada form
form.addEventListener('submit', (e) => {
    e.preventDefault();

    //di dalam event kita tambahkan  kode di bawah ini
    const task = input.value;

    //menggecek jika isian masih kosong
    if (!task) {
        alert("Masukan tugas terlebih dahulu");
        return;
    }

    //lanjut kita buat element pada HTML dengan javascript
    const task_el = document.createElement('div');
    task_el.classList.add('task');

    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');

    task_el.appendChild(task_content_el);


    //lanjut buat element input 
    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');

    task_content_el.appendChild(task_input_el);

    //lanjut buat tombol edit dan delete 
    const task_action_el = document.createElement('div');
    task_action_el.classList.add("action");

    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add("edit");
    task_edit_el.textContent = 'Edit';

    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add("delete")
    task_delete_el.textContent = 'Delete';

    task_action_el.appendChild(task_edit_el);
    task_action_el.appendChild(task_delete_el);

    task_el.appendChild(task_action_el);

    list_el.appendChild(task_el);

    //membersihkan inputan
    input.value = '';

    //berikutnya kita tambahkan event pada tombol edit dan delete 


    //event jika tombol edit di klik 
    task_edit_el.addEventListener('click', () => {
        //console.log(task_edit_el.innerText.toLowerCase());
        if (task_edit_el.innerText.toLowerCase() == 'edit') {
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit_el.innerText = 'Simpan';
        } else {
            task_input_el.setAttribute('readonly', 'readonly');
            task_edit_el.innerText = 'Edit';
        }
    });

    //event jika tombol delete di klik
    task_delete_el.addEventListener('click', () => {
        list_el.removeChild(task_el);
    });
});