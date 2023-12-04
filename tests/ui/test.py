import logging
from playwright.sync_api import Page
from pytest_bdd import given, parsers, scenarios, then, when

from tests.ui.utils import LLMStudioPage, login, handle_terms_and_conditions_page

scenarios("llm_studio.feature")


@given("LLM Studio home page is opened")
def open_llm_studio(page: Page, app_address: str):
    page.goto(app_address)
    handle_terms_and_conditions_page(page)


@when("I login to LLM Studio", target_fixture="llm_studio")
def login_to_llm_studio(logger: logging.Logger, page: Page, app_address: str):
    login(page, "okta", "H2O-Tester", "ManagedCloud5")
    return LLMStudioPage(logger, page, app_address)


@then(parsers.parse("I should see the dataset {dataset_name}"))
def view_datasets(llm_studio: LLMStudioPage, dataset_name: str):
    llm_studio.view_datasets()
    llm_studio.assert_dataset_import(dataset_name)


@when(parsers.parse("I upload dataset with path {filepath} and name {dataset_name}"))
def upload_dataset_using_filesystem(
    llm_studio: LLMStudioPage, filepath: str, dataset_name: str
):
    llm_studio.import_dataset_from_filesystem(filepath, dataset_name)


@then("I see the home page")
def view_home_page(llm_studio: LLMStudioPage):
    llm_studio.open_home_page()


@when(parsers.parse("I delete dataset {dataset_name}"))
def delete_dataset(llm_studio: LLMStudioPage, dataset_name: str):
    llm_studio.delete_dataset(dataset_name)


@then(parsers.parse("I should not see the dataset {dataset_name}"))
def view_datasets(llm_studio: LLMStudioPage, dataset_name: str):
    llm_studio.view_datasets()
    llm_studio.assert_dataset_deletion(dataset_name)
