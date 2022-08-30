from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in custom_packaging/__init__.py
from custom_packaging import __version__ as version

setup(
	name="custom_packaging",
	version=version,
	description="Custom packaging",
	author="amafhh",
	author_email="infotechamafhh@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
