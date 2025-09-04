//*******************BO DAU**********************************
document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("chat-input");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

function strnormalize(str) {
            let AccentsMap = [
                "aàảãáạăằẳẵắặâầẩẫấậ",
                "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
                "dđ", "DĐ",
                "eèẻẽéẹêềểễếệ",
                "EÈẺẼÉẸÊỀỂỄẾỆ",
                "iìỉĩíị",
                "IÌỈĨÍỊ",
                "oòỏõóọôồổỗốộơờởỡớợ",
                "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
                "uùủũúụưừửữứự",
                "UÙỦŨÚỤƯỪỬỮỨỰ",
                "yỳỷỹýỵ",
                "YỲỶỸÝỴ"
            ];
            for (let i = 0; i < AccentsMap.length; i++) {
                let re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
                let char = AccentsMap[i][0];
                str = str.replace(re, char);
            }
            str = str.replace(/\s+/g, ' ');
            str = str.trim();
            str = str.toLowerCase();
            return str;
        }

function output(input) {
  let product;

  // Regex remove non word/space chars
  // Trim trailing whitespce
  // Remove digits - not sure if this is best
  // But solves problem of entering something like 'hi1'

  let text = input.toLowerCase();
      text = strnormalize(text);

  if (compare(prompts, replies, text)) { 
    // Search for exact match in `prompts`
    product = compare(prompts, replies, text);
  } else if (text.match(/thank/gi)) {
    product = "You're welcome!"
  } else if (text.match(/(corona|covid|virus)/gi)) {
    // If no match, check if message contains `coronavirus`
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } else {
    // If all else fails: random alternative
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  // Update DOM
  addChat(input, product);
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}

function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let disDiv = document.createElement("div");
  disDiv.innerHTML = `<p>&#160;</p>`
  messagesContainer.appendChild(disDiv);

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<span class="userText">${input}</span>&#160;<img src="user.png" class="avatar">`;
  messagesContainer.appendChild(userDiv);
  
  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.className = "bot response";
  botDiv.innerText = "Typing...";
  setTimeout(() => {
    botDiv.innerHTML = `<img src="bot-mini.png" class="avatar">&#160;<span class="bot1">${product}</span>`;
  }, 2000
  )
  messagesContainer.appendChild(botDiv);

  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
}

//*********************CUM TU KHOA***********************

var mycars = ['cảm biến đo gió','cảm biến nhiệt độ nước làm mát'];
var list = document.getElementById('sug_list');

mycars.forEach(function(item){
   var option = document.createElement('option');
   option.value = item;
   list.appendChild(option);
});

//*********************THAM CHIEU***************************

// Options (người dùng có thể hỏi)
const prompts = [
  ["chao","xin chao","hi","hello","hey","ban oi"],
  ["he thong phun xang la gi","phun xang la gi","gioi thieu he thong phun xang"],
  ["nguyen ly hoat dong he thong phun xang","nguyen ly phun xang","hoat dong phun xang"],
  ["cau tao he thong phun xang","cau tao chinh","cau truc phun xang"],
  ["nhiem vu cua he thong phun xang","chuc nang phun xang"],
  ["ecu la gi","ecu dieu khien","hop dieu khien dien tu"],
  ["cam bien oxy","cam bien oxi","oxygen sensor"],
  ["cam bien luong khong khi","maf","air flow sensor"],
  ["cam bien ap suat tuyet doi","map","cam bien ap suat"],
  ["cam bien nhiet do nuoc lam mat","cam bien nhiet do dong co","coolant sensor"],
  ["cam bien nhiet do khong khi nap","iat","intake air temperature sensor"],
  ["cam bien vi tri ban dap ga","tps","throttle position sensor"],
  ["cam bien vi tri truc khuyu","crankshaft sensor"],
  ["cam bien vi tri truc cam","camshaft sensor"],
  ["bo dieu ap nhien lieu","regulator","fuel pressure regulator"],
  ["bom nhien lieu","fuel pump"],
  ["loc nhien lieu","fuel filter"],
  ["kim phun","injector"],
  ["he thong phun xang truyen thong","phun xang che hoa khi"],
  ["he thong phun xang dien tu","efi","electronic fuel injection"],
  ["uu diem cua phun xang dien tu"],
  ["nhuoc diem cua phun xang dien tu"],
  ["hoi khi hoi luu","evap system"],
  ["he thong kiem soat khi thai","emission control"],
  ["che do lam viec cua dong co","che do co ban"],
  ["che do khoi dong lanh","khoi dong lanh"],
  ["che do tai trung binh","tai trung binh"],
  ["che do tai toan phan","tai lon"],
  ["che do giam toc","giam toc xe"],
  ["tam biet","bye","hen gap lai"]
]

// Possible responses (trả lời tương ứng)
const replies = [
  ["Chào bạn 👋! Mình là chatbot hỗ trợ tra cứu kiến thức trong giáo trình Hệ thống Phun xăng. Bạn muốn tìm hiểu gì?"],
  ["Hệ thống phun xăng là cơ cấu cung cấp nhiên liệu cho động cơ bằng cách phun nhiên liệu thành sương vào đường nạp hoặc buồng cháy. Đây là giải pháp thay thế bộ chế hòa khí truyền thống."],
  ["Nguyên lý: Nhiên liệu được bơm từ thùng chứa → qua lọc → đến kim phun → ECU điều khiển kim phun mở để nhiên liệu phun thành sương trộn với không khí → hỗn hợp vào buồng cháy."],
  ["Cấu tạo gồm: thùng nhiên liệu, bơm xăng, lọc xăng, bộ điều áp, kim phun, ECU và các cảm biến."],
  ["Nhiệm vụ của hệ thống phun xăng: định lượng và cung cấp nhiên liệu phù hợp cho động cơ ở mọi chế độ làm việc."],
  ["ECU (Electronic Control Unit) là bộ não điện tử, nhận tín hiệu từ cảm biến, xử lý và điều khiển kim phun cùng các bộ chấp hành."],
  ["Cảm biến oxy đặt trên đường xả, đo lượng oxy trong khí thải để ECU điều chỉnh tỷ lệ hòa khí đạt chuẩn λ=1."],
  ["Cảm biến lưu lượng khí nạp (MAF) đo khối lượng hoặc thể tích không khí vào động cơ, cung cấp tín hiệu quan trọng cho ECU."],
  ["Cảm biến áp suất tuyệt đối (MAP) đo áp suất trong ống nạp, giúp ECU tính toán lượng không khí nạp khi không có MAF."],
  ["Cảm biến nhiệt độ nước làm mát cung cấp tín hiệu để ECU biết trạng thái nóng/lạnh của động cơ và hiệu chỉnh nhiên liệu."],
  ["Cảm biến nhiệt độ khí nạp (IAT) đo nhiệt độ không khí vào động cơ, giúp ECU điều chỉnh lượng phun phù hợp."],
  ["Cảm biến vị trí bướm ga (TPS) theo dõi độ mở của bàn đạp ga, báo cho ECU biết tải động cơ."],
  ["Cảm biến vị trí trục khuỷu cho ECU biết tốc độ và vị trí góc quay của động cơ, cực kỳ quan trọng để điều khiển phun và đánh lửa."],
  ["Cảm biến vị trí trục cam xác định thì nạp – xả, giúp ECU đồng bộ điều khiển phun và đánh lửa theo chu kỳ."],
  ["Bộ điều áp nhiên liệu giữ áp suất phun ổn định, đảm bảo kim phun làm việc chính xác."],
  ["Bơm nhiên liệu có nhiệm vụ hút xăng từ thùng và đưa đến kim phun với áp suất cao."],
  ["Lọc nhiên liệu loại bỏ tạp chất, đảm bảo nhiên liệu sạch trước khi vào kim phun."],
  ["Kim phun là cơ cấu biến nhiên liệu thành dạng sương mịn, phun vào đường nạp hoặc buồng cháy theo lệnh ECU."],
  ["Hệ thống phun xăng truyền thống (chế hòa khí) sử dụng cơ khí để trộn không khí và xăng, độ chính xác thấp hơn."],
  ["Hệ thống phun xăng điện tử (EFI) sử dụng ECU điều khiển kim phun, cho độ chính xác cao và tiết kiệm nhiên liệu."],
  ["Ưu điểm EFI: tiết kiệm nhiên liệu, giảm khí thải, tăng công suất, khởi động dễ dàng."],
  ["Nhược điểm EFI: cấu tạo phức tạp, chi phí sửa chữa và thay thế cao."],
  ["Hệ thống EVAP (kiểm soát hơi xăng) thu hồi hơi nhiên liệu trong thùng xăng để đốt lại, tránh ô nhiễm."],
  ["Hệ thống kiểm soát khí thải dùng cảm biến và bộ xúc tác để giảm CO, HC, NOx trong khí xả."],
  ["Các chế độ làm việc cơ bản: khởi động, tải trung bình, tải lớn, giảm tốc, không tải."],
  ["Chế độ khởi động lạnh: ECU tăng thời gian phun để động cơ dễ nổ khi nhiệt độ thấp."],
  ["Chế độ tải trung bình: ECU duy trì tỷ lệ hòa khí chuẩn để động cơ vận hành ổn định."],
  ["Chế độ tải toàn phần: ECU làm giàu hỗn hợp để tăng công suất động cơ."],
  ["Chế độ giảm tốc: ECU có thể ngắt phun nhiên liệu để tiết kiệm và giảm khí thải."],
  ["Tạm biệt 👋! Khi cần tra cứu thêm về hệ thống phun xăng, hãy quay lại nhé."]
]

// Fallback khi không khớp
const alternative = [
  "Xin lỗi, mình chưa có thông tin chính xác. Bạn thử hỏi bằng từ khóa khác nhé.",
  "Mình chưa hiểu rõ câu hỏi, bạn có thể gõ từ khóa như 'cảm biến oxy' hoặc 'nguyên lý phun xăng'."
]

// Hàm xử lý hiển thị trả lời
function showBotReply(text) {
  const chatArea = document.getElementById("chatbot-box");
  let reply = document.createElement("div");
  reply.className = "bot-reply";
  reply.innerHTML = text;
  chatArea.appendChild(reply);
}
