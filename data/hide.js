            // Lấy danh sách menu
            var menu = document.querySelectorAll('#siteNav > ul > li');
            // Lặp qua từng menu để gán sự kiện click
            for (var i = 0; i < menu.length; i++)
            {
                menu[i].addEventListener("mouseover", function()
                {
                    // Ẩn hết menu con
                    var menuList = document.querySelectorAll('#siteNav > ul > li > ul');
                    for (var j = 0; j < menuList.length; j++) {
                        menuList[j].style.display = "none";
                    }
                    // Hiển thị menu hiện tại
                    // đối tượng this chính là thẻ li hiện tại
                    // nên ta sử dụng hàm childrent để lấy danh sách thẻ con
                    // mà thẻ ul nằm ở vị trí thứ 2 nên trong mảng con nó
                    // sẽ có vị trí là 1 (mảng bắt đầu từ 0)
                    this.children[1].style.display = "block";
                });
		menu[i].addEventListener("mouseleave", function()
                {
                    // Ẩn hết menu con
                    var menuList = document.querySelectorAll('#siteNav > ul > li > ul');
                    for (var j = 0; j < menuList.length; j++) {
                        menuList[j].style.display = "none";
                    }
                    // Hiển thị menu hiện tại
                    // đối tượng this chính là thẻ li hiện tại
                    // nên ta sử dụng hàm childrent để lấy danh sách thẻ con
                    // mà thẻ ul nằm ở vị trí thứ 2 nên trong mảng con nó
                    // sẽ có vị trí là 1 (mảng bắt đầu từ 0)
                    this.children[1].style.display = "none";
                });
            }