package com.mfpe.service;

import java.util.List;

import com.mfpe.model.AuditBenchmark;
import com.mfpe.model.AuditResponse;
import com.mfpe.model.AuditQuestion;
import com.mfpe.model.AuditRequest;

public interface AuditResponseService {
	
	public AuditResponse getAuditResponse(List<AuditBenchmark> benchmarkList, String auditType,List<AuditQuestion> questionResponses);

	public AuditResponse saveAuditResponse(AuditResponse auditResponse, AuditRequest auditRequest); 
		
}
