"""Change cantidad column type to String

Revision ID: c19e1c17e693
Revises: 119a3bc8e66d
Create Date: 2024-07-25 23:37:44.454472

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'c19e1c17e693'
down_revision = '119a3bc8e66d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('ingrediente', schema=None) as batch_op:
        batch_op.alter_column('cantidad',
               existing_type=postgresql.DOUBLE_PRECISION(precision=53),
               type_=sa.String(length=250),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('ingrediente', schema=None) as batch_op:
        batch_op.alter_column('cantidad',
               existing_type=sa.String(length=250),
               type_=postgresql.DOUBLE_PRECISION(precision=53),
               existing_nullable=False)

    # ### end Alembic commands ###