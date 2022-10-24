// 업로드한 파일은 input 객체의 프로퍼티에 존재한다.
const file = document.querySelector("input[type='file']");
// change : 해당 객체에 변화가 있을 때(파일이 업로드 되었을 때)
file.addEventListener("change", function(e){
    var reader = new FileReader();
    // 업로드한 파일을 읽어와서 암호화된 URL 정보를 얻을 수 있다.
    reader.readAsDataURL(e.target.files[0]);
    // 전달받은 파일정보를 모두 로딩했을 때
    reader.onload = function(e){
        // 암호화된 절대 경로를 가져와서
        let url = e.target.result;

        // 이미지 파일인지 검사
        if(url.includes("image")){
            // 기존 이미지에서 썸네일 이미지로 대체
            document.querySelector("label div").style.backgroundImage = "url(" + url +")";
        }else{
            // 미리 준비해놓은 이미지로 대체
            document.querySelector("label div").style.backgroundImage = "url(no-image.jpg)";
        }
    }
});

var markerPosition = new kakao.maps.LatLng(37.58181383364842, 126.9427933427254);
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: markerPosition, // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);