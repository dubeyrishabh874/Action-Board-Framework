export const API_KEY = process.env.NEXT_PUBLIC_CHAT_API_KEY;
export const MAIL_HANDLER_API_KEY =
  process.env.NEXT_PUBLIC_MAIL_HANDLER_API_KEY;
export const COSMOS_API_KEY = process.env.NEXT_PUBLIC_COSMOS_API_KEY;
export const API_BASE_URL = process.env.NEXT_PUBLIC_CHAT_API_URI;
export const AZURE_API_BASE_URL = process.env.NEXT_PUBLIC_COSMOS_API_URI;
export const APPLICATION_CLIENT_ID =
  process.env.NEXT_PUBLIC_APPLICATION_CLIENT_ID;
export const APP_TENANT_ID = process.env.NEXT_PUBLIC_TENANT_ID;
export const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;
export const UPLOAD_DOC_API_URI = process.env.NEXT_PUBLIC_UPLOAD_DOC_API_URI;
export const MAIL_HANDLER_URL = process.env.NEXT_PUBLIC_MAIL_HANDLER_URL;
export const SENTIMENT_URL = process.env.NEXT_PUBLIC_SENTIMENT_URL;
export const CHEQUE_URL = process.env.NEXT_PUBLIC_CHEQUE_URL;
export const GRAPH_URL = process.env.NEXT_PUBLIC_GRAPH_URL;
export const NOTE_TAKER_URL = process.env.NEXT_PUBLIC_NOTE_TAKER_URL;
export const DATA_HANDLER_URL = process.env.NEXT_PUBLIC_DATA_HANDLER_URL;
export const GET_CLAIMS_URL = process.env.NEXT_PUBLIC_CLAIM_REGISTRATION_URI;
export const TRANSLATOR_API_KEY = process.env.NEXT_PUBLIC_TRANSLATOR_API_KEY;
export const TRANSLATOR_URI = process.env.NEXT_PUBLIC_TRANSLATOR_URI;
export const EMBD_DOC_URI = process.env.NEXT_PUBLIC_EMBD_DOC_URI;
export const MAIL_HANDLER_URI = process.env.NEXT_PUBLIC_MAIL_HANDLER_URI;
export const NBQA_API_KEY = process.env.NEXT_PUBLIC_NBQA_API_KEY;
export const NBQA_URL = process.env.NEXT_PUBLIC_NBQA_URL;
export const CONTRACT_CRAWLER_API_KEY =
  process.env.NEXT_PUBLIC_CONTRACT_CRAWLER_API_KEY;
export const CONTRACT_CRAWLER_URL =
  process.env.NEXT_PUBLIC_CONTRACT_CRAWLER_URL;
export const CONTRACT_TENDER_API_KEY =
  process.env.NEXT_PUBLIC_CONTRACT_TENDER_API_KEY;
export const CONTRACT_TENDER_URL = process.env.NEXT_PUBLIC_CONTRACT_TENDER_URL;
export const ELEVATE_DENSITY_API_KEY =
  process.env.NEXT_PUBLIC_ELEVATE_DENSITY_API_KEY;
export const ELEVATE_DENSITY_URI = process.env.NEXT_PUBLIC_ELEVATE_DENSITY_URI;
export const AVERAGE_RATING = process.env.NEXT_PUBLIC_AVERAGE_RATING;
export const SALES_HANDBOOK_URL = process.env.NEXT_PUBLIC_SALES_HANDBOOK_URL;
export const CHEQUE_SCAN_API_KEY = process.env.NEXT_PUBLIC_CHEQUE_SCAN_API_KEY;
export const CHEQUE_SCAN_URI = process.env.NEXT_PUBLIC_CHEQUE_SCAN_URI;
export const AI_BOM_URL = process.env.NEXT_PUBLIC_AI_BOM_URL;
export const DIGITAL_TWIN_URL = process.env.NEXT_PUBLIC_DIGITAL_TWIN_URL;
export const CCC_SEC_URL = process.env.NEXT_PUBLIC_CCC_SEC_URL;
export const CCC_SEC_API_KEY = process.env.NEXT_PUBLIC_CCC_SEC_API_KEY;
export const GO_TO_TEAMS_APP_URL = process.env.NEXT_PUBLIC_GO_TO_TEAMS_APP_URL;
export const AISR_URI = process.env.NEXT_PUBLIC_AISR_URI;
export const AISR_API_KEY = process.env.NEXT_PUBLIC_AISR_API_KEY;
export const GET_BLOB_URI = process.env.NEXT_PUBLIC_GET_BLOB_URI;
export const GET_BLOB_API_KEY = process.env.NEXT_PUBLIC_GET_BLOB_API_KEY;
export const CTS_CONTAINER_NAME = process.env.NEXT_PUBLIC_CTS_CONTAINER_NAME;
export const CCC_VOICE_CONTAINER_NAME =
  process.env.NEXT_PUBLIC_CCC_VOICE_CONTAINER_NAME;
export const DT_FIELD_WIKI_ALL_DOC =
  process.env.NEXT_PUBLIC_DT_FIELD_WIKI_ALL_DOC;
export const DT_FIELD_WIKI_GENERATING_RES =
  process.env.NEXT_PUBLIC_DT_FIELD_WIKI_GENERATING_RES;
export const DT_FIELD_WIKI_NO_RES =
  process.env.NEXT_PUBLIC_DT_FIELD_WIKI_NO_RES;
export const DT_S7000_ALL_DOC = process.env.NEXT_PUBLIC_DT_S7000_ALL_DOC;
export const DT_S7000_GENERATING_RES =
  process.env.NEXT_PUBLIC_DT_S7000_GENERATING_RES;
export const DT_S7000_NO_RES = process.env.NEXT_PUBLIC_DT_S7000_NO_RES;
export const DT_TWIN_SAS_URI_JSON =
  process.env.NEXT_PUBLIC_DT_TWIN_SAS_URI_JSON;
export const DOC_SUMMARY_GENERATING_RES =
  process.env.NEXT_PUBLIC_DOC_SUMMARY_GENERATING_RES;
export const DOC_SUMMARY_NO_RES = process.env.NEXT_PUBLIC_DOC_SUMMARY_NO_RES;

export const config = {
  getAIChatResponse: `${API_BASE_URL}/get_response/corporate`,
  getAvatarAIChatResponse: `${API_BASE_URL}/get_response_avatar`,
  getDocChatResponse: `${API_BASE_URL}/get_response_doc`,
  getInteranetChatResponse: `${API_BASE_URL}/get_response_intranet`,
  getUser: `${AZURE_API_BASE_URL}/get_user`,
  pointsLeaderboard: `${AZURE_API_BASE_URL}/info_leaderboard`,
  pointsOnBookmark: `${AZURE_API_BASE_URL}/points_on_bookmark`,
  pointsOnRating: `${AZURE_API_BASE_URL}/points_on_rating`,
  pointsOnQuery: `${AZURE_API_BASE_URL}/points_on_query`,
  insertChatMessage: `${AZURE_API_BASE_URL}/insert_chat_message`,
  bookmarkChat: `${AZURE_API_BASE_URL}/bookmark_chat`,
  getBookmarkChat: `${AZURE_API_BASE_URL}/get_bookmark_chat`,
  recordRating: `${AZURE_API_BASE_URL}/record_rating`,
  getRatings: `${AZURE_API_BASE_URL}/get_ratings`,
  clearAllBookmarkChat: `${AZURE_API_BASE_URL}/clear_all_bookmark_chat`,
  deleteBookmarkChat: `${AZURE_API_BASE_URL}/delete_bookmark_chat`,
  getDocuments: `${UPLOAD_DOC_API_URI}/get_document_names`,
  uploadDocument: `${UPLOAD_DOC_API_URI}/extract_document`,
  deleteDocument: `${UPLOAD_DOC_API_URI}/delete_document`,
  getClaimsResponse: `${GET_CLAIMS_URL}/get_claims_response`,
  getEventsResponse: `${GET_CLAIMS_URL}/get_events_response`,
  translateText: `${TRANSLATOR_URI}/translate_text`,
  getEmbdDoc: `${EMBD_DOC_URI}/get_embd_doc`,
  getEmbdDocURL: `${EMBD_DOC_URI}/get_doc_url`,
  insertDocQueryChat: `${AZURE_API_BASE_URL}/insert_doc_query_chat`,
  upsertDoc: `${AZURE_API_BASE_URL}/upsert_doc`,
  deleteDoc: `${AZURE_API_BASE_URL}/delete_doc`,
  getAusBuildingCodesResponse: `${API_BASE_URL}/get_response/aus_building_codes`,
  getMwikiResponse: `${API_BASE_URL}/get_response/mwiki`,
  getResponseNiPricing: `${API_BASE_URL}/get_response/ni_pricing`,
  getResponseSCFVillaLift: `${API_BASE_URL}/get_response/scf_villa_lift`,
  getResponseEIFulfilment: `${API_BASE_URL}/get_response/ei_fulfilment`,
  bookmarkEmbd: `${AZURE_API_BASE_URL}/bookmark_embd`,
  getBookmarkEmbd: `${AZURE_API_BASE_URL}/get_bookmark_embd`,
  clearAllBookmarkEmbd: `${AZURE_API_BASE_URL}/clear_all_bookmark_embd`,
  deleteBookmarkEmbd: `${AZURE_API_BASE_URL}/delete_bookmark_embd`,
  getMailHandlerURL: `${MAIL_HANDLER_URI}/classify_mail`,
  getUserListing: `${AZURE_API_BASE_URL}/user_access/read_user_list`,
  addAndUpdateUser: `${AZURE_API_BASE_URL}/user_access/add_update_user`,
  deleteUser: `${AZURE_API_BASE_URL}/user_access/delete_user`,
  getUserByEmailId: `${AZURE_API_BASE_URL}/user_access/read_user`,
  batchUploadUser: `${AZURE_API_BASE_URL}/user_access/batch_update`,
  retrieveChat: `${MAIL_HANDLER_URI}/reporting`,
  getRecordingLink: `${MAIL_HANDLER_URI}/get_recording_link`,
  multiModalResponse: `${EMBD_DOC_URI}/multi_modal_response`,
  getAIWebChatResponse: `${API_BASE_URL}/web_search`,
  getAIPeopleChatResponse: `${API_BASE_URL}/office_functions/People`,
  getAIMailsChatResponse: `${API_BASE_URL}/office_functions/Mails`,
  getAIMeetingsChatResponse: `${API_BASE_URL}/office_functions/Meetings`,
  getAISparesChatResponse: `${EMBD_DOC_URI}/get_part_details`,
  getAIShapeChatResponse: `${API_BASE_URL}/get_response/shape_wiki`,
  nbqaDocUploadExtractFields: `${NBQA_URL}/extract_fields`,
  nbqaRecordResults: `${AZURE_API_BASE_URL}/record_results_nbqa`,
  contractCrawlerDocUpload: `${CONTRACT_CRAWLER_URL}/extract`,
  tenderSummarizationDocUpload: `${CONTRACT_TENDER_URL}/upload_tenders`,
  ctsCheckDuplicates: `${CONTRACT_TENDER_URL}/check_duplicates`,
  ctsRecordResults: `${CONTRACT_TENDER_URL}/record_results_cts`,
  getAIFindProductInfoChatResponse: `${EMBD_DOC_URI}/model_data`,
  getElevateDensityResponse: `${ELEVATE_DENSITY_URI}/upload_image`,
  getElevateDensityAddressUpdate: `${ELEVATE_DENSITY_URI}/update_details`,
  getElevateMap: `${ELEVATE_DENSITY_URI}/get_sas_url`,
  getAISalesResponse: `${SALES_HANDBOOK_URL}/sales_handbook`,
  getAISalesData: `${SALES_HANDBOOK_URL}/get_data`,
  ctsMergedContentIndex: `${CONTRACT_TENDER_URL}/merged_content_index`,
  insertFevCard: `${AZURE_API_BASE_URL}/insert_fav_card`,
  deleteFevCard: `${AZURE_API_BASE_URL}/delete_fav_card`,
  chequeScan: `${CHEQUE_SCAN_URI}/get_mappings_llm`,
  getTenderDocPdf: `${CONTRACT_TENDER_URL}/get_sas_url`,
  getTenderChatResponse: `${API_BASE_URL}/get_response_tender`,
  getTenderSummary: `${CONTRACT_TENDER_URL}/get_tender_summary`,
  getCtsModifiedData: `${CONTRACT_TENDER_URL}/get_modified_chat`,
  getAIBOMDetails: `${AI_BOM_URL}/equipment_360`,
  getAIBOMURL: `${AI_BOM_URL}/ai_bom`,
  deleteCtsDocument: `${CONTRACT_TENDER_URL}/delete_user_cards_cdb`,
  getCtsDocStatus: `${CONTRACT_TENDER_URL}/delete_unprocessed_blob_files`,
  getCtsUserFiles: `${CONTRACT_TENDER_URL}/get_user_files`,
  addCtsUserFiles: `${CONTRACT_TENDER_URL}/add_cts_userfiles`,
  getDigitalTwinURL: `${DIGITAL_TWIN_URL}/get_eq_data`,
  getResponseDigitalTwin: `${DIGITAL_TWIN_URL}/get_response_twin`,
  getServiceLeaderURL: `${DIGITAL_TWIN_URL}/get_service_leader`,
  getDtFileLink: `${DIGITAL_TWIN_URL}/get_file_link`,
  getFieldWikiFileLink: `${DIGITAL_TWIN_URL}/render_file_share`,
  getUserDetails: `${AZURE_API_BASE_URL}/user_details`,
  getResponseTwinTest: `${API_BASE_URL}/get_response_twin`,
  getResponseTwin: `${DIGITAL_TWIN_URL}/get_response_twin_S7000`,
  getEquipment360kpi: `${DIGITAL_TWIN_URL}/get_equipment_360_kpi`,
  getChecklist: `${DIGITAL_TWIN_URL}/get_checklist`,
  storeChecklist: `${DIGITAL_TWIN_URL}/store_checklist`,
  getResponseFieldwiki: `${DIGITAL_TWIN_URL}/get_response_dt_fieldwiki`,
  getLegalUkcUserFiles: `${CONTRACT_TENDER_URL}/get_user_files`,
  deleteLegalUkcDocument: `${CONTRACT_TENDER_URL}/delete_user_cards_cdb`,
  getCtshistory: `${CONTRACT_TENDER_URL}/get_history`,
  reProcessCtsDoc: `${CONTRACT_TENDER_URL}/re_process_cts_doc`,
  renameCtsDoc: `${CONTRACT_TENDER_URL}/edit_tendername`,
  getOutboundCall: `${CCC_SEC_URL}/outboundCall`,
  uploadAiSparePartsImage: `${AISR_URI}/process_image1`,
  getDtSoDetails: `${DIGITAL_TWIN_URL}/get_dt_so_details`,
  getResponseDtCustPortal: `${DIGITAL_TWIN_URL}/get_response_dt_cust_portal`,
  uploadDtSoFiles: `${DIGITAL_TWIN_URL}/upload_dt_so_files`,
  getDtSoFiles: `${DIGITAL_TWIN_URL}/get_dt_so_files`,
  getSasDtSoFiles: `${DIGITAL_TWIN_URL}/get_sas_dt_so_files`,
  getLocation: `${DIGITAL_TWIN_URL}/get_location`,
  dtEquiInfoFieldwiki: `${DIGITAL_TWIN_URL}/dt_buddy_graph`,
  getSchindlerAIStatistics: `${AZURE_API_BASE_URL}/user_metrics`,
  get_Cts_multilang: `${CONTRACT_TENDER_URL}/get_multilang`,
  getAiSparePartsImage: `${AISR_URI}/Stream_Images`,
  getBlobResponse: `${GET_BLOB_URI}/get_blob/`,
  getBlobFieldwikiResponse: `${GET_BLOB_URI}/get_file/fieldwiki`,
  getCtsBlobName: `${CONTRACT_TENDER_URL}/get_blob_name`,
  uploadDocSummary: `${UPLOAD_DOC_API_URI}/upload_blob`,
  getDocSummaryFiles: `${UPLOAD_DOC_API_URI}/fetch_userfiles`,
  getDocsummaryFileUrl: `${UPLOAD_DOC_API_URI}/get_sas_url`,
  deleteDocSummaryFile: `${UPLOAD_DOC_API_URI}/delete_blobs`,
  getDocSummaryChatResponse: `${API_BASE_URL}/fetch_source_text`,
  getDocSummaryFolderFiles: `${UPLOAD_DOC_API_URI}/get_files`,
};

export default config;
