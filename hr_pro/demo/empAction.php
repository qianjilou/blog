<?php
include 'config/DB.class.php';
include 'config/upload.class.php';
$action = $_GET["action"];
if($action=="insert"){
	// ��������Ա������Ϣ;
	$eName = $_POST["eName"];
	$eSex = $_POST["eSex"];
	$eEdu = $_POST["eEdu"];
	
	$dId = $_POST["dId"];
	$eTec = $_POST["eTec"];
	$eExp = $_POST["eExp"];
	$eImg = $_FILES["eImg"]; //ͼƬ��Ϣ��ɵ�����
	$upImg = new upload($eImg);
	$filePath = $upImg->main();
	$sql = "insert into emp(eName, eSex, eEdu, eImg, eTec, eExp, dId)";
	$sql.= " values('{$eName}', {$eSex}, '{$eEdu}', '{$filePath}', '{$eTec}', '{$eExp}', {$dId})";
	$db->query($sql);
	
}else if($action=="update"){
	//������������ �Լ� id
	$eId = $_GET["eId"];
	$eName = $_POST["eName"];
	$eSex = $_POST["eSex"];
	$eEdu = $_POST["eEdu"];
	
	$dId = $_POST["dId"];
	$eTec = $_POST["eTec"];
	$eExp = $_POST["eExp"];
	$eImg = $_FILES["eImg"]; //ͼƬ��Ϣ��ɵ�����
	print_r($eImg);
	
	//ͼƬ: �漰��ͼƬ �ϴ��Ĺ��� ���ͼƬ�Ƿ�Ҫ�޸� 
	//�ж�ͼƬ�Ƿ��޸�
	if(strlen($eImg["name"])>0){
		//����ͼ�޸�
		// 1 ɾ��ԭͼ:
			$sql_1 = "select eImg from emp where eId={$eId}";
			$rs_1 = $db->fetchOne($sql_1);
			//print_r($rs_1);
			if(is_file($rs_1["eImg"])){  //���ļ� �ļ����� ִ��ɾ��
				unlink($rs_1["eImg"]);
			}
		//2 �ϴ���ͼ
			$upImg = new upload($eImg);
			$filePath = $upImg->main();
	}else{
		//û��ͼƬ�޸�
		$sql_1 = "select eImg from emp where eId={$eId}";
		$rs_1 = $db->fetchOne($sql_1);
		$filePath = $rs_1["eImg"];
	}
	
	//�޸ļ�¼
	$sql = "update emp set eName='{$eName}', eSex='{$eSex}',eImg='{$filePath}', eEdu='{$eEdu}', eTec='{$eTec}', eExp='{$eExp}', dId='{$dId}'";
	$sql.= " where eId={$eId}"; 
	$db->query($sql);
}else if($action=="delete"){
	$eId = $_GET["eId"];
	//��Ҫ��ɾ��Ա������Ƭ �ҵ�ͼƬ��·�� unlink(url)ɾ����Ƭ
	$sql_1 = "select eImg from emp where eId={$eId}";
	$rs = $db->fetchOne($sql_1);

	
	if(is_file($rs["eImg"])){  //���ļ� �ļ����� ִ��ɾ��
		unlink($rs["eImg"]);
	}
	
	$sql = "delete from emp where eId={$eId}";
	$db->query($sql);	
}